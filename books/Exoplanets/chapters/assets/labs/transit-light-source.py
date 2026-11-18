"""Illustrate the quiet-chord contamination model of Rackham et al. (2018).

Reference: https://doi.org/10.3847/1538-4357/aaa08c
Run: python3 transit-light-source.py
"""

import sys

import matplotlib.pyplot as plt
import numpy as np

SECOND_RADIATION_CONSTANT = 1.438776877e-2  # h*c/k_B in metre kelvin


def blackbody_contrast(wavelength_um, temperature, quiet_temperature):
    """Return the component-to-quiet intensity ratio at each wavelength."""
    wavelength_m = np.asarray(wavelength_um) * 1e-6
    exponent = SECOND_RADIATION_CONSTANT / wavelength_m
    return np.expm1(exponent / quiet_temperature) / np.expm1(exponent / temperature)


def observed_depth(quiet_depth, spot_fraction, spot_contrast,
                   facula_fraction, facula_contrast):
    """Normalize the light blocked along a quiet chord by the full disk."""
    quiet_fraction = 1 - spot_fraction - facula_fraction
    disk_contrast = (quiet_fraction + spot_fraction * spot_contrast
                     + facula_fraction * facula_contrast)
    return quiet_depth / disk_contrast


def main(output_path):
    wavelength_um = np.linspace(0.6, 5.0, 450)
    quiet_depth = 1000  # ppm, flat at all wavelengths
    spot_contrast = blackbody_contrast(wavelength_um, 2800, 3300)
    facula_contrast = blackbody_contrast(wavelength_um, 3500, 3300)
    cases = [
        ("5% cool spots", 0.05, 0.0, "#a33320", "-"),
        ("10% bright faculae", 0.0, 0.10, "#176586", "--"),
        ("Spots and faculae together", 0.05, 0.10, "#6c4285", "-."),
    ]

    fig, ax = plt.subplots(figsize=(8.2, 4.1), layout="constrained")
    ax.axhline(quiet_depth, color="#444444", linestyle=":", label="Quiet star")
    for label, spots, faculae, color, linestyle in cases:
        depth = observed_depth(quiet_depth, spots, spot_contrast,
                               faculae, facula_contrast)
        ax.plot(wavelength_um, depth, label=label, color=color, ls=linestyle, lw=2)
    ax.set(xlabel="Wavelength (µm)", ylabel="Transit depth (ppm)")
    ax.grid(alpha=0.2)
    ax.legend(frameon=False, loc="center right")
    fig.savefig(output_path, dpi=160)
    plt.close(fig)

    checks = observed_depth(quiet_depth, 0.05, 0.5, 0.0, 1.0)
    quiet_check = observed_depth(quiet_depth, 0.0, spot_contrast, 0.0, facula_contrast)
    np.testing.assert_allclose(checks, 1000 / 0.975)
    np.testing.assert_allclose(quiet_check, quiet_depth)
    print(f"5% coverage at half intensity: {checks:.2f} ppm")
    print(f"Saved {output_path}")


if __name__ == "__main__":
    output = sys.argv[1] if len(sys.argv) > 1 else "transit-light-source.png"
    main(output)
