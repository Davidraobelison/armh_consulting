import sharp from "sharp";
import { glob } from "glob";
import fs from "fs/promises";

// 1. Convertir les images
const files = await glob("public/**/*.{jpg,JPG,jpeg,png}");

for (const file of files) {
  const out = file.replace(/\.(jpg|JPG|jpeg|png)$/, ".webp");
  await sharp(file).webp({ quality: 82 }).toFile(out);
  await fs.unlink(file);
  console.log(`✓ ${file} → ${out}`);
}

// 2. Mettre à jour les références dans le code source
const codeFiles = await glob("{app,components}/**/*.{ts,tsx,js,jsx}");

for (const file of codeFiles) {
  let content = await fs.readFile(file, "utf-8");
  const original = content;

  content = content.replace(/\.(jpg|JPG|jpeg|png)(?=['"`])/g, ".webp");

  if (content !== original) {
    await fs.writeFile(file, content, "utf-8");
    console.log(`📝 Mis à jour : ${file}`);
  }
}

console.log("\n✅ Terminé — images converties et références mises à jour.");