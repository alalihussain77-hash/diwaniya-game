from pathlib import Path
from PIL import Image

failures = []
for file in sorted(Path("public/car_parts").glob("car_*.jpg")):
    try:
        with Image.open(file) as img:
            description = f"{img.format} {img.size} {img.mode}"
            img.load()
        print(f"[car-audit] {file.name}: decoded {description}")
    except Exception as error:
        print(f"[car-audit] {file.name}: CANNOT DECODE - {type(error).__name__}: {error}")
        failures.append(file.name)
if failures:
    raise SystemExit(f"Invalid car photo source files: {', '.join(failures)}")
