import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3 p-6">
      <div className="relative size-8 rounded-full bg-[#00573F]">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="De La Salle University"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <h1 className="font-semibold uppercase">De La Salle University</h1>
      </div>
    </div>
  );
}
