export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <h1 className="text-5xl text-red-600 font-semibold">
        You are Not Authenticated !!
      </h1>
    </>
  );
}
