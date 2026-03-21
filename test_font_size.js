function calculateFor(text) {
  const charsCount = text.length;
  // Let's take the spaces out? Spaces are narrower, usually, or maybe we just count total widths.
  // We can measure the bounding box in a real scenario, but 120vw / length is an approximation.
  const dynamicFontSize = `calc(195vw / ${Math.max(charsCount, 5)})`;
  console.log(`${text} -> chars: ${charsCount}, fontSize: ${195 / charsCount}vw`);
}
calculateFor("GESTAO DE EVENTOS");
calculateFor("CONSELHO DELIBERATIVO");
calculateFor("LOCALIZADOR PELO CEP");
calculateFor("PROJETOS");
