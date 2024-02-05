"""
NAME: Python script example - subscript
SYNOPSIS: Returns data in JSON format for use in a sub-script
ID: rs-python-subscript-example
TAGS: Example "RunScript Team"
"""
import json

# Vytvoření seznamu slovníků (podobně jako objekty v JSONu)
data = [
    {"Jmeno": "Pavel", "Prijmeni": "Novak", "Vek": 30},
    {"Jmeno": "Petra", "Prijmeni": "Svobodova", "Vek": 25}
]

# Převod dat na JSON string
json_data = json.dumps(data, ensure_ascii=False, indent=4)

# Vypsání JSON stringu
print("RS-EXPORT-TABLE-START")
print(json_data)
print("RS-EXPORT-TABLE-END")
