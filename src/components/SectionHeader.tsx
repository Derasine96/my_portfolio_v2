export const SectionHeader = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <div className="container">
      <div className="flex justify-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase font-black leading-tight bg-gradient-to-r from-red-400 to-primary-lightRed text-transparent bg-clip-text tracking-widest">
          {title}
        </h1>
      </div>
      <h2 className="font-serif text-primary-offWhite text-xl md:text-2xl text-center mt-1">
        {subtitle}
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-center text-primary-offWhite mt-2.5 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  );
};
