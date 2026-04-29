import os

with open('new_nav.html', 'r') as f:
    nav_content = f.read()

for filename in os.listdir('.'):
    if filename.endswith('.html') and filename not in ['new_nav.html', 'new_footer.html']:
        with open(filename, 'r') as f:
            content = f.read()
        
        start_tag = '<nav class="d-none d-lg-block">'
        end_tag = '</nav>'
        
        start_idx = content.find(start_tag)
        end_idx = content.find(end_tag)
        
        if start_idx != -1 and end_idx != -1:
            end_idx += len(end_tag)
            # Find the nav_content starting from start_tag
            nav_start_idx = nav_content.find(start_tag)
            nav_end_idx = nav_content.find(end_tag) + len(end_tag)
            new_nav = nav_content[nav_start_idx:nav_end_idx]
            
            new_content = content[:start_idx] + new_nav + content[end_idx:]
            
            with open(filename, 'w') as f:
                f.write(new_content)
        elif start_idx != -1:
            print(f"Could not find end tag in {filename}")

print("Navigation updated in all files.")
