import os
import re

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r') as f:
            content = f.read()
        
        # Replace variations of Creas/Crease with Ara Aesthetics
        # Match 'creas cosmetic', 'creas cosmetics', 'crease cosmetic', 'creas' standalone
        content = re.sub(r'(?i)\bcreas(e)?\s*cosmetics?\b', 'Ara Aesthetics', content)
        content = re.sub(r'(?i)\bcreas(e)?\s*clinic\b', 'Ara Aesthetics', content)
        content = re.sub(r'(?i)\bcreas(e)?\b', 'Ara Aesthetics', content)
        
        with open(filename, 'w') as f:
            f.write(content)

print("Replaced Creas with Ara Aesthetics in all HTML files.")
