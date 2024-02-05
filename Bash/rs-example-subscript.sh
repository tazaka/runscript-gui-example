#!/bin/bash
# NAME: BASH script example - subscript
# SYNOPSIS: Example of Bash script as a sub-script for another script
# ID: rs-bash-subscript-example
# TAGS: Example "RunScript Team"

# Definice osob
jmeno1="Jan"
prijmeni1="Novak"
vek1=30

jmeno2="Eva"
prijmeni2="Svobodova"
vek2=25

# Ruční sestavení JSON
echo "RS-EXPORT-TABLE-START"
echo "["
echo "  {"
echo "    \"Jmeno\": \"$jmeno1\","
echo "    \"Prijmeni\": \"$prijmeni1\","
echo "    \"Vek\": $vek1"
echo "  },"
echo "  {"
echo "    \"Jmeno\": \"$jmeno2\","
echo "    \"Prijmeni\": \"$prijmeni2\","
echo "    \"Vek\": $vek2"
echo "  }"
echo "]"
echo "RS-EXPORT-TABLE-END"
