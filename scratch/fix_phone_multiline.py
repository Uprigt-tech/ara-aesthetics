import os
import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Phone Numbers display text (handling potential newlines/spaces)
    # Match "+91 95004" followed by any whitespace (including newlines) and then "78253"
    content = re.sub(r'95004\s+78253', '95004 78053', content)
    
    # Just in case there are other variations
    content = content.replace('9500478253', '9500478053')
    
    # Double check hrefs
    content = content.replace('tel:+919500478253', 'tel:+919500478053')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Walk through all HTML files
root_dir = r'c:\Users\vipin\OneDrive\Desktop\New folder\ara-aesthetics'
for root, dirs, collections in os.walk(root_dir):
    for name in collections:
        if name.endswith('.html'):
            update_file(os.path.join(root, name))
