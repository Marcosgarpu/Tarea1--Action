const fs = require("fs");

// GitHub pasa los inputs como variables de entorno INPUT_<NOMBRE>
const files = (process.env.INPUT_FILES || "")
  .split(",")
  .map((f) => f.trim())
  .filter(Boolean);

let missing = 0;

for (const file of files) {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} existe`);
  } else {
    console.log(`::error::❌ ${file} NO existe`);
    missing++;
  }
}

if (missing > 0) {
  process.exit(1);
}