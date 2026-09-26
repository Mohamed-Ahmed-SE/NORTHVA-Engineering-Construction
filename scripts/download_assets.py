import os
import re
import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def download_file(url, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        print(f"Skipping existing: {target_path}")
        return True
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as response, open(target_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded: {target_path} ({len(data)} bytes)")
        return True
    except Exception as e:
        print(f"Failed to download {url} -> {target_path}: {e}")
        return False

# Mapping rules
# 1. Services
services_file = "src/data/services.ts"
with open(services_file, "r") as f:
    services_content = f.read()

# 2. Company
company_file = "src/data/company.ts"
with open(company_file, "r") as f:
    company_content = f.read()

# 3. Sectors
sectors_file = "src/data/sectors.ts"
with open(sectors_file, "r") as f:
    sectors_content = f.read()

# 4. Sustainability
sustainability_file = "src/data/sustainability.ts"
with open(sustainability_file, "r") as f:
    sustainability_content = f.read()

# 5. About
about_file = "src/app/about/page.tsx"
with open(about_file, "r") as f:
    about_content = f.read()

# 6. StatementSection
statement_file = "src/components/home/StatementSection.tsx"
with open(statement_file, "r") as f:
    statement_content = f.read()

# 7. Projects
projects_file = "src/data/projects.ts"
with open(projects_file, "r") as f:
    projects_content = f.read()

url_map = {}

# Process Services
service_items = [
    ("general-contracting", "public/images/services/general-contracting.jpg"),
    ("infrastructure", "public/images/services/infrastructure.jpg"),
    ("design-build", "public/images/services/design-build.jpg"),
    ("mep-engineering", "public/images/services/mep-engineering.jpg"),
    ("fit-out", "public/images/services/fit-out.jpg"),
    ("project-management", "public/images/services/project-management.jpg"),
]

for sid, path in service_items:
    match = re.search(r'id:\s*"' + sid + r'".*?image:\s*"(https://images\.unsplash\.com/[^"]+)"', services_content, re.DOTALL)
    if match:
        url = match.group(1)
        url_map[url] = path

# Process Company Leadership
leadership_items = [
    ("omar-el-naggar", "public/images/leadership/omar-el-naggar.jpg"),
    ("karim-mansour", "public/images/leadership/karim-mansour.jpg"),
    ("sarah-khalil", "public/images/leadership/sarah-khalil.jpg"),
    ("ahmed-nassar", "public/images/leadership/ahmed-nassar.jpg"),
]
for lid, path in leadership_items:
    match = re.search(r'id:\s*"' + lid + r'".*?image:\s*"(https://images\.unsplash\.com/[^"]+)"', company_content, re.DOTALL)
    if match:
        url = match.group(1)
        url_map[url] = path

# Process Sectors
sector_items = [
    ("commercial", "public/images/sectors/commercial.jpg"),
    ("residential", "public/images/sectors/residential.jpg"),
    ("hospitality", "public/images/sectors/hospitality.jpg"),
    ("healthcare", "public/images/sectors/healthcare.jpg"),
    ("industrial", "public/images/sectors/industrial.jpg"),
    ("infrastructure", "public/images/sectors/infrastructure.jpg"),
]
for sec_id, path in sector_items:
    match = re.search(r'id:\s*"' + sec_id + r'".*?image:\s*"(https://images\.unsplash\.com/[^"]+)"', sectors_content, re.DOTALL)
    if match:
        url = match.group(1)
        url_map[url] = path

# Process Sustainability
s_match = re.search(r'image:\s*"(https://images\.unsplash\.com/[^"]+)"', sustainability_content)
if s_match:
    url_map[s_match.group(1)] = "public/images/sustainability/sustainability-hero.jpg"

# Process About
a_match = re.search(r'src="(https://images\.unsplash\.com/[^"]+)"', about_content)
if a_match:
    url_map[a_match.group(1)] = "public/images/about/about-operations.jpg"

# Process Statement
st_match = re.search(r'src="(https://images\.unsplash\.com/[^"]+)"', statement_content)
if st_match:
    url_map[st_match.group(1)] = "public/images/statement-monolith.jpg"

# Process Projects
project_blocks = re.findall(r'(\{\s*id:\s*"([^"]+)".*?featured:\s*(?:true|false),\s*\})', projects_content, re.DOTALL)
print(f"Found {len(project_blocks)} project blocks")

for block, pid in project_blocks:
    # heroImage
    h_match = re.search(r'heroImage:\s*"(https://images\.unsplash\.com/[^"]+)"', block)
    if h_match:
        url_map[h_match.group(1)] = f"public/images/projects/{pid}-hero.jpg"
    
    # gallery
    g_match = re.search(r'galleryImages:\s*\[(.*?)\]', block, re.DOTALL)
    if g_match:
        g_urls = re.findall(r'"(https://images\.unsplash\.com/[^"]+)"', g_match.group(1))
        for idx, g_url in enumerate(g_urls, start=1):
            url_map[g_url] = f"public/images/projects/{pid}-gallery-{idx}.jpg"

print(f"Total unique URLs to download: {len(url_map)}")

# Perform downloads
success_count = 0
for url, target_path in url_map.items():
    if download_file(url, target_path):
        success_count += 1

print(f"Successfully downloaded {success_count}/{len(url_map)} assets")

# If aura-business-district.jpg exists, let's keep it or copy
if os.path.exists("public/images/projects/aura-business-district.jpg"):
    print("Aura custom image ready")

# Now update the source files
def replace_in_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    updated = content
    for url, local_path in url_map.items():
        web_path = "/" + local_path.replace("public/", "")
        updated = updated.replace(url, web_path)
    if updated != content:
        with open(filepath, "w") as f:
            f.write(updated)
        print(f"Updated references in {filepath}")

replace_in_file(services_file)
replace_in_file(company_file)
replace_in_file(sectors_file)
replace_in_file(sustainability_file)
replace_in_file(about_file)
replace_in_file(statement_file)
replace_in_file(projects_file)

print("All asset references updated to local paths!")
