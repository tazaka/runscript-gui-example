<#
.NAME
   PS script example

.SYNOPSIS
    Example PS script for RunScript GUI with commander library usage

.WARNING
    Toto je varovná zpráva.

.DANGER
    Toto je danger zpráva
#>

<#PSScriptInfo
.VERSION 1.0
.AUTHOR RunScript Team  
.TAGS Example "RunScript Team" 
#>

param(

    [Parameter(Mandatory=$true,HelpMessage = "Vyberte jednu z dostupných možností.")]
    [ComponentModel.DisplayName("ParamList")]
    [ValidateSet("foo","bar")]
    [string]$ParamList,

    [Parameter(Mandatory=$true,HelpMessage = "Vyberte jednu nebo více možností.")]
    [ValidateSet("foo","bar","aaaa dddd","aa,vv")]
    [string[]]$ParamListMulti,

    [Parameter(Mandatory=$true,HelpMessage = "Povinný textový vstup")]
    [ComponentModel.DisplayName("Text param 1")]
    [string]$Param1,

    [Parameter(HelpMessage = "Nepovinný textový vstup {id:test-substring-js}")]
    [ComponentModel.DisplayName("Text Param 2")]
    [string]$Param2,

    [Parameter(Mandatory,HelpMessage = "Vstup pro datum a čas s označením - warning {warning}")]
    [ComponentModel.DisplayName("Výběr data")]
    [DateTime]$DateTimePatam,

    [Parameter(Mandatory,HelpMessage = "Přepínač s označením - danger {danger}")]
    [ComponentModel.DisplayName("Switch Danger")]
    [bool]$Param3,

    [Parameter(HelpMessage = "Přepínač s označením - warning {warning}")]
    [ComponentModel.DisplayName("Switch Warning")]
    [bool]$Param4


)
Write-Host "====================1"

Write-Host $ParamList -foregroundColor red

Write-Host $DateTimePatam.ToString("yyyy-MM-dd HH:mm:ss")

foreach ($a in $ParamListMulti) {
 Write-Host "> $($a) <"
}
#$ParamListMulti | ForEach-Object { "Good $_!" }
Start-Sleep -Seconds 1
Write-Host "lko"
#$Server = Read-Host -Prompt 'Input your server  name'