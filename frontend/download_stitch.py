import urllib.request
import os
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

os.makedirs(r"c:\Hackathons\Vibe2Ship\frontend\stitch_designs", exist_ok=True)

urls = {
    "goals.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2FkYmFlOGQzMTYxMjRhMzE4MjhlYWY1ZjA3NDY1OWExEgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086",
    "tasks.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzk1M2Q4MTZlZmI2ZDQzNmVhMjFhYjAwZTFjZThiYWNlEgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086",
    "calendar.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRlYTdmY2RjZjQxZDRjMTNiNzNkMmEzYjVjY2MzOTAwEgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086",
    "future_self.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzJhN2EyMDFlODFjNjRkNDBhZTY5YTM4ZGQyYzlhNTk1EgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086",
    "rescue_center.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzI4OTdmZmE5YjNjNjQ2NjI4ZjlhZmQ4YzAwMDUzMzQ3EgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086",
    "agent_hub.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2JhMWVkNGUwODBiZTRjYTZhOGM2MTA5Zjc2ZTc4YmUyEgsSBxDwysHvuQQYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzYxNTAzMjI4MjQ5ODM4MzE2&filename=&opi=89354086"
}

for filename, url in urls.items():
    print(f"Downloading {filename}...")
    filepath = os.path.join(r"c:\Hackathons\Vibe2Ship\frontend\stitch_designs", filename)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, context=ctx) as response:
        with open(filepath, 'wb') as f:
            f.write(response.read())
    print(f"Saved to {filepath}")
