function BlockFile {
    param (
        [string[]]$modList
    )
    $content = @()
    $content += "[`n"
    foreach ($block in $modList) {

        $content += "    {`n"
        $content += ('        "block": ' + $block + ",`n")
        $content += ('        "mass": ' + "100.0`n")

        if ($block -eq $modList[-1])
        {
            $content += "    }`n"
        }
        else
        {
            $content += "    },`n"
        }
    }
    $content += "]"
    return $content
}

$blocklist = Get-Content "$PSScriptRoot\list_of_all_blocks.txt"

$framedlist = @()

foreach($block in $blocklist)
{
    if($block -match "framedblocks:*")
    {
        $framedlist += $block
    }
}

$framedfile = @()
$framedfile = BlockFile $framedlist

$framedfile | Out-File -Encoding utf8 "$PSScriptRoot\data\valkyrienskies\vs_mass\framedblocks.json" -NoNewline

# [
#     {
#         "block": "vs_clockwork:afterblazer",
#         "mass": 100.0
#     }
# ]