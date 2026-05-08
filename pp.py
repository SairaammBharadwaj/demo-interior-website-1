from PIL import Image, ImageEnhance, ImageFilter
from pathlib import Path
import zipfile
import shutil
import os

INPUT_ZIP = 'tinified.zip'
EXTRACT_DIR = 'extracted_images'
OUTPUT_DIR = 'processed_images'
OUTPUT_ZIP = 'processed_images.zip'

TARGET_WIDTH = 1600
JPEG_QUALITY = 88
SHARPEN_FACTOR = 1.5
CONTRAST_FACTOR = 1.08
COLOR_FACTOR = 1.03

SUPPORTED_FORMATS = ('.jpg', '.jpeg', '.png', '.webp')

if Path(EXTRACT_DIR).exists():
    shutil.rmtree(EXTRACT_DIR)

if Path(OUTPUT_DIR).exists():
    shutil.rmtree(OUTPUT_DIR)

Path(EXTRACT_DIR).mkdir(parents=True, exist_ok=True)
Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)

with zipfile.ZipFile(INPUT_ZIP, 'r') as zip_ref:
    zip_ref.extractall(EXTRACT_DIR)

for image_path in Path(EXTRACT_DIR).rglob('*'):
    if image_path.suffix.lower() not in SUPPORTED_FORMATS:
        continue

    try:
        img = Image.open(image_path).convert('RGB')

        width, height = img.size

        if width > TARGET_WIDTH:
            new_height = int((TARGET_WIDTH / width) * height)
            img = img.resize((TARGET_WIDTH, new_height), Image.LANCZOS)

        img = ImageEnhance.Sharpness(img).enhance(SHARPEN_FACTOR)
        img = ImageEnhance.Contrast(img).enhance(CONTRAST_FACTOR)
        img = ImageEnhance.Color(img).enhance(COLOR_FACTOR)

        img = img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=140, threshold=3))

        relative_path = image_path.relative_to(EXTRACT_DIR)
        output_file = Path(OUTPUT_DIR) / relative_path.with_suffix('.webp')

        output_file.parent.mkdir(parents=True, exist_ok=True)

        img.save(output_file, 'WEBP', quality=JPEG_QUALITY, method=6)

        print(f'Processed: {relative_path}')

    except Exception as e:
        print(f'Error processing {image_path}: {e}')

with zipfile.ZipFile(OUTPUT_ZIP, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for file in Path(OUTPUT_DIR).rglob('*'):
        if file.is_file():
            zipf.write(file, file.relative_to(OUTPUT_DIR))

print('\nProcessing Complete')
print(f'Output ZIP Created: {OUTPUT_ZIP}')