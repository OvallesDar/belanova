import Link from "next/link";

export default function NotFound() {
    return (
      <div className="mt-24 text-center h-[50vh] flex flex-col justify-center gap-3">
        <h1 className="text-xl">404 - Page Not Found</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link
              href={"/"}
              className="w-20 self-center bg-gradient-to-t from-primary to-secondary text-background font-semibold rounded-lg px-3 py-2 hover:from-secondary hover:to-primary"
              style={{
                textShadow:
                  "1px 1px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5), -1px 1px 0 rgba(0,0,0,0.5)",
              }}
            >
             Volver
            </Link>
      </div>
    );
  }