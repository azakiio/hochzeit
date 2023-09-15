export function LayoutSection({ children, title, titleSize }: Props) {

  if(titleSize === "sm") return (
    'text-lg'
  )
  if(titleSize === "md") return (
    'text-2xl'
  )
  return (
    <section className="my-24">
      <h1 className="text-3xl text-green-700 fw-bold mb-6">{title}</h1>
      <div>
        {children}
      </div>
    </section>
  );
}

type Props = {
  children: React.ReactNode;
  title: string;
  titleSize?: "sm" | "md" | "lg";
};
