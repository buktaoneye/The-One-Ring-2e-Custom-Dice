Hooks.once('diceSoNiceReady', (dice3d) => {
    // Register the two systems (Dice Presets profiles)
    // The "tor2e" id matches the game system, making it the default.
    dice3d.addSystem({ id: "tor2e", name: "The One Ring 2e (White)" }, "preferred");
    dice3d.addSystem({ id: "tor2e-black", name: "The One Ring 2e (Black)" });

    dice3d.addColorset({
        name: "tor2e-white-colors",
        description: "TOR 2e White Colors",
        category: "The One Ring",
        foreground: "#ae5653",
        background: "#e6dcc9",
        outline: "#e6dcc9",
        edge: "#e6dcc9",
        texture: "none"
    });

    dice3d.addColorset({
        name: "tor2e-black-colors",
        description: "TOR 2e Black Colors",
        category: "The One Ring",
        foreground: "#fe6f1b",
        background: "#282926",
        outline: "#282926",
        edge: "#282926",
        texture: "none"
    });

    // ==========================================
    // THE ONE RING 2E (WHITE)
    // ==========================================
    const whiteSystem = "tor2e";

    // White d6 presets (d6, ds, dw)
    const whiteD6Faces = [
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-1.png",
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-2.png",
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-3.png",
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-4.png",
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-5.png",
        "modules/dice-the-one-ring/assets/whiteset/d6/d6-6.png"
    ];
    for (const term of ["d6", "ds", "dw"]) {
        dice3d.addDicePreset({
            type: term,
            labels: whiteD6Faces,
            system: whiteSystem,
            colorset: "tor2e-white-colors"
        }, "d6");
    }

    // White d12 presets (d12, df, de)
    const whiteD12Faces = [
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-1.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-2.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-3.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-4.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-5.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-6.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-7.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-8.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-9.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-10.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-11.png",
        "modules/dice-the-one-ring/assets/whiteset/d12/d12-12.png"
    ];
    for (const term of ["d12", "df", "de"]) {
        dice3d.addDicePreset({
            type: term,
            labels: whiteD12Faces,
            system: whiteSystem,
            colorset: "tor2e-white-colors"
        }, "d12");
    }

    // ==========================================
    // THE ONE RING 2E (BLACK)
    // ==========================================
    const blackSystem = "tor2e-black";

    // Black d6 presets (d6, ds, dw)
    const blackD6Faces = [
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-1.png",
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-2.png",
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-3.png",
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-4.png",
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-5.png",
        "modules/dice-the-one-ring/assets/blackset/d6/d6_success_black_d6-6.png"
    ];
    for (const term of ["d6", "ds", "dw"]) {
        dice3d.addDicePreset({
            type: term,
            labels: blackD6Faces,
            system: blackSystem,
            colorset: "tor2e-black-colors"
        }, "d6");
    }

    // Black d12 presets (d12, df, de)
    const blackD12Faces = [
        "modules/dice-the-one-ring/assets/blackset/d12/d12-1.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-2.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-3.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-4.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-5.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-6.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-7.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-8.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-9.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-10.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-11.png",
        "modules/dice-the-one-ring/assets/blackset/d12/d12-12.png"
    ];
    for (const term of ["d12", "df", "de"]) {
        dice3d.addDicePreset({
            type: term,
            labels: blackD12Faces,
            system: blackSystem,
            colorset: "tor2e-black-colors"
        }, "d12");
    }
});
