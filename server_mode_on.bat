@echo off
setlocal
powershell -NoProfile -ExecutionPolicy Bypass -Command "$bat = '%~f0'; $content = Get-Content -LiteralPath $bat -Raw; $marker = '# POWERSHELL-BEGIN'; $idx = $content.IndexOf($marker); if ($idx -lt 0) { throw 'Missing PowerShell payload marker.' }; Invoke-Expression $content.Substring($idx)"
exit /b %ERRORLEVEL%

# POWERSHELL-BEGIN
$ErrorActionPreference = 'Stop'
$suffix = '.disclientmod'
$root = Split-Path -Parent $bat

$targets = @(
  @{ Dir = 'mods'; Pattern = 'MouseTweaks-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'jecharacters-*.jar' },
  @{ Dir = 'mods'; Pattern = 'citresewn-*.jar' },
  @{ Dir = 'mods'; Pattern = 'IMBlocker-*.jar' },
  @{ Dir = 'mods'; Pattern = 'oculus-mc*.jar' },
  @{ Dir = 'mods'; Pattern = 'oculus-flywheel-compat-Forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'embeddium-*.jar' },
  @{ Dir = 'mods'; Pattern = '*sodiumextras-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'sodiumdynamiclights-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'chloride-FORGE-*.jar' },
  @{ Dir = 'mods'; Pattern = 'DistantHorizons-*.jar' },
  @{ Dir = 'mods'; Pattern = 'farsight-*.jar' },
  @{ Dir = 'mods'; Pattern = 'BetterPingDisplay-*.jar' },
  @{ Dir = 'mods'; Pattern = 'fast-ip-ping-*.jar' },
  @{ Dir = 'mods'; Pattern = 'CustomSkinLoader_ForgeV2-*.jar' },
  @{ Dir = 'mods'; Pattern = 'fancymenu_forge_*.jar' },
  @{ Dir = 'mods'; Pattern = '*drippyloadingscreen_forge_*.jar' },
  @{ Dir = 'mods'; Pattern = '*seamless-loading-screen-*.jar' },
  @{ Dir = 'mods'; Pattern = 'fancytoasts-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'smooth_f5-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = '*ShoulderSurfing-Forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'Controlling-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'configured-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'visual_keybinder-*.jar' },
  @{ Dir = 'mods'; Pattern = 'JEI Copy Recipe Json-*.jar' },
  @{ Dir = 'mods'; Pattern = 'jeimultiblocks-*.jar' },
  @{ Dir = 'mods'; Pattern = 'durabilitytooltip-*.jar' },
  @{ Dir = 'mods'; Pattern = 'TFCVesselTooltip-*.jar' },
  @{ Dir = 'mods'; Pattern = 'tfc_support_indicator-*.jar' },
  @{ Dir = 'mods'; Pattern = 'immersiveoverlays-*.jar' },
  @{ Dir = 'mods'; Pattern = 'Drip Sounds-*.jar' },
  @{ Dir = 'mods'; Pattern = 'particle_core-*.jar' },
  @{ Dir = 'mods'; Pattern = 'legendaryblockentities-*.jar' },
  @{ Dir = 'mods'; Pattern = 'ImmediatelyFast-Forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'lightspeed-*.jar' },
  @{ Dir = 'mods'; Pattern = '*smoothboot(reloaded)-*.jar' },
  @{ Dir = 'mods'; Pattern = 'flickerfix-*.jar' },
  @{ Dir = 'mods'; Pattern = 'betterbiomereblend-*.jar' },
  @{ Dir = 'mods'; Pattern = 'clienttweaks-forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'EnchantmentDescriptions-Forge-*.jar' },
  @{ Dir = 'mods'; Pattern = 'YeetusExperimentus-Forge-*.jar' },
  @{ Dir = 'kubejs\startup_scripts'; Pattern = 'health_overlay.js' },
  @{ Dir = 'kubejs\startup_scripts\custom'; Pattern = 'removeeffect.js' }
)

$renamed = 0
$skipped = 0
$missing = 0

foreach ($target in $targets) {
  $dir = Join-Path $root $target.Dir
  if (-not (Test-Path -LiteralPath $dir)) {
    Write-Host "[MISS] Directory not found: $($target.Dir)"
    $missing++
    continue
  }

  $active = @(Get-ChildItem -LiteralPath $dir -File -Filter $target.Pattern -ErrorAction SilentlyContinue)
  if ($active.Count -eq 0) {
    $disabled = @(Get-ChildItem -LiteralPath $dir -File -Filter ($target.Pattern + $suffix) -ErrorAction SilentlyContinue)
    if ($disabled.Count -gt 0) {
      foreach ($file in $disabled) {
        Write-Host "[SKIP] Already in server mode: $($file.Name)"
        $skipped++
      }
    } else {
      Write-Host "[MISS] Not found: $($target.Dir)\$($target.Pattern)"
      $missing++
    }
    continue
  }

  foreach ($file in $active) {
    $newName = $file.Name + $suffix
    $newPath = Join-Path $file.DirectoryName $newName
    if (Test-Path -LiteralPath $newPath) {
      Write-Host "[SKIP] Target exists: $newName"
      $skipped++
      continue
    }
    Rename-Item -LiteralPath $file.FullName -NewName $newName
    Write-Host "[ON] $($file.Name) -> $newName"
    $renamed++
  }
}

Write-Host ""
Write-Host "Server mode enabled. Renamed: $renamed, skipped: $skipped, missing: $missing"
