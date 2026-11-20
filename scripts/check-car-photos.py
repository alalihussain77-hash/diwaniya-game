from pathlib import Path
from PIL import Image

failures = []
for file in sorted(Path("public/car_parts").glob("car_*.jpg")):
    if file.stem in {"car_1", "car_7", "car_31"}:
        data = file.read_bytes()
        print(
            f"[jpeg-structure] {file.name}: bytes={len(data)}, "
            f"first24={data[:24].hex()}, last16={data[-16:].hex()}, "
            f"SOI={data.startswith(bytes.fromhex('ffd8'))}, "
            f"EOI={data.endswith(bytes.fromhex('ffd9'))}, "
            f"SOF0={data.find(bytes.fromhex('ffc0'))}, "
            f"SOF2={data.find(bytes.fromhex('ffc2'))}, "
            f"SOS={data.find(bytes.fromhex('ffda'))}, "
            f"APP11={data.count(bytes.fromhex('ffeb'))}"
        )
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
