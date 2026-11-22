import re, sys
from pathlib import Path

html = Path(sys.argv[1]).read_text(encoding="utf-8")

assert html.count("<style>") == html.count("</style>"), "Unbalanced style tags"
assert "https://tymafrica.com/" in html, "Canonical TYM Africa URL missing"
for domain in ("Cybersécurité", "Cryptographie", "Machine Learning", "Domotique", "PENETRATION TESTING"):
    assert domain in html, f"Missing domain: {domain}"
assert html.count('id="capabilityTrack"') == 1, "Domain carousel markup missing"
assert "TYM <span style=\"color:var(--blue)\">AFRICA</span>" in html, "Desktop brand not updated"
assert "TYM <b>AFRICA</b>" in html, "Footer brand not updated"
assert 'id="publisher-ads"' in html, "AdSense section missing"
assert 'aria-label="Advertisements"' in html, "Ad section must be clearly labelled"
assert 'class="adsense-slot"' in html, "AdSense slot missing"
assert "Cliquez sur nos annonces" not in html, "Ad click encouragement detected"
print("TYM Africa smoke tests: PASS")

assert 'hero-float-d' in html and 'hero-float-e' in html, "Five floating domains missing"
assert "5 domaines majeurs" in html, "Hero domain count not updated"
assert "assets/tym-lab-1.webp" not in html and "assets/tym-lab-5.webp" not in html, "Broken local lab image references remain"
