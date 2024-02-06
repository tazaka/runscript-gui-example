<#
.NAME
    PS script example - subscript
.SYNOPSIS
    Returns data in JSON format for use in a sub-script
.DESCRIPTION
    Generates a table of example data in JSON format for use in another script as a select subscript parameter.
.ID
    rs-ps-subscript-example
.ID_KEY
    Jmeno
#>

<#PSScriptInfo 
.VERSION 1.10
.AUTHOR RunScript Team  
.TAGS Example "RunScript Team" SubScript
#>


 # Vytvoření objektu
 $objekt = @(
    [PSCustomObject]@{Jmeno = 'Jan'; Prijmeni = 'Novak'; Vek = 22},
    [PSCustomObject]@{Jmeno = 'Eva'; Prijmeni = 'Svobodova'; Vek = 25}
)

# Převedení objektu na JSON
$json = $objekt | ConvertTo-Json

# Vypsání JSONu do konzole
Write-Host "RS-EXPORT-TABLE-START"
Write-Host $json
Write-Host "RS-EXPORT-TABLE-END"
