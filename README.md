# The One Ring 2e - Custom Dice for Dice So Nice!

This module adds custom 3D dice themes (Black and White sets) for "The One Ring 2nd Edition" to the "Dice So Nice!" FoundryVTT module. 

## Requirements
*   **[Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice)** module installed and enabled. This is a **required** mod.
*   **[The One Ring 2e (tor2e)](https://foundryvtt.com/packages/tor2e)** system installed and enabled. This is a **required** mod.

## Transformed Dice Types
This module transforms the following dice terms within Dice So Nice! when rolling with the `tor2e` system:
*   **d6 (Success Dice)**: `d6`, `ds`, `dw`
*   **d12 (Feat Dice)**: `d12`, `df`, `de`

## Installation

### Via Manifest URL (Recommended)
1. Open the Foundry VTT Setup screen and go to the **Add-on Modules** tab.
2. Click **Install Module**.
3. Paste the following manifest URL in the text box at the bottom:
   ```
   https://raw.githubusercontent.com/buktaoneye/The-One-Ring-2e-Custom-Dice/main/module.json
   ```
4. Click **Install**.

### Manual Installation
If you prefer to install it manually:
1.  Copy the entire `dice-the-one-ring.zip` folder into your FoundryVTT `Data/modules/` directory. Unzip into the `Data/modules/` directory.
2.  Restart your FoundryVTT server if it is currently running.
3.  Log into your world as a Gamemaster.
4.  Go to the **Game Settings** tab, click **Manage Modules**, and enable **The One Ring Custom Dice**.

## Configuration
To use the new dice themes:
1.  In Foundry, go to the **Game Settings** tab, then select **Configure Settings** and select **Dice So Nice!**.
2.  Select the **3D Dice Settings** tab, then in the **Dice Presets (Faces)** dropdown select either **The One Ring 2e (White)** or **The One Ring 2e (Black)**.
3.  When you make rolls using the `tor2e` system, your 3D dice will now feature the custom success and feat runes.

## Credits
*   Images by Discord user **asampieri**.
