import { Typewriter } from "react-simple-typewriter";

const TypingTitle = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      👩‍💻{" "}
      <span className="">
        <Typewriter
          words={["¡Hola! Soy Karla Cabañas", "Desarrolladora de Software"]}
          loop={1} // Solo se escribe una vez
          cursor
          cursorStyle="_"
          typeSpeed={100}
        />
      </span>
    </h2>
  );
};

export default TypingTitle;
