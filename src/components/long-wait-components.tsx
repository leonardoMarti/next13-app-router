export async function LongWaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <h1>Carregado!</h1>
    </div>
  );
}
