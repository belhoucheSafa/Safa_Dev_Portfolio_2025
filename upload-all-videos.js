// upload-all-videos.js
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dir = path.join(process.cwd(), "src/assets/projectsDemos");

const files = fs.readdirSync(dir);

for (const file of files) {
  if (!file.endsWith(".mp4")) continue;
  const publicId = `portfolio/${path.parse(file).name}`;
  cloudinary.uploader
    .upload(path.join(dir, file), {
      resource_type: "video",
      public_id: publicId,
      eager: [{ streaming_profile: "auto", format: "m3u8" }],
      eager_async: true,
    })
    .then((res) => {
      console.log(`Uploaded: ${file}`);
      console.log(`MP4: https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`);
      console.log(`HLS: https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/sp_auto/${publicId}.m3u8`);
    })
    .catch((err) => {
      console.error(`Error uploading ${file}:`, err);
    });
}
