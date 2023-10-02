export default function guardrail(mathFunction) {
  const stack = [];

  try {
    stack.push(mathFunction());
  } catch (err) {
    stack.push(err.toString());
  } finally {
    stack.push('Guardrail was processed');
  }
  return stack;
}
