import { Brand } from "./brand";

export function MainHeader() {
  return (
    <header className="container">
      <div className="flex h-16 items-center px-4 max-w-3xl mx-auto">
        <Brand />
      </div>
    </header>
  );
}
