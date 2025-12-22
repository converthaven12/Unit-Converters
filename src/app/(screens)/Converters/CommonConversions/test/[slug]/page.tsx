export default function Page({ params }: any) {
  return (
    <div>
      <h1>TEST PAGE WORKING</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
