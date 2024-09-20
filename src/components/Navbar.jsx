import { MagnifyingGlass } from './MagnifyingGlass';

export const Frame = () => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-14 py-6 relative bg-white border-b-4 border-black">
      <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-24 h-14 object-cover"
          alt="Image"
          src="image-1.png"
        />
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <div className="relative w-5 h-5">
            <img
              className="absolute w-4 h-4 top-0.5 left-0.5"
              alt="Union"
              src="union.svg"
            />
          </div>
          <div className="relative w-fit [font-family:'Ubuntu-Medium',Helvetica] font-medium text-neutral-80 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Kategori
          </div>
        </div>
        <div className="flex items-center gap-9 relative flex-1 grow">
          <div className="flex items-center justify-between p-2.5 relative flex-1 grow rounded-md border border-solid border-neutral-50">
            <p className="relative w-fit [font-family:'Ubuntu-Medium',Helvetica] font-medium text-neutral-50 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Cari produk, jasa, atau vendor
            </p>
            <MagnifyingGlass className="!relative !w-5 !h-5" />
          </div>
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="frame-1000004971.svg"
          />
          <div className="inline-flex h-10 items-center gap-3 relative flex-[0_0_auto]">
            <img
              className="relative w-10 h-10"
              alt="Ellipse"
              src="ellipse-331.svg"
            />
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Ubuntu-Medium',Helvetica] font-medium text-neutral-80 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                Gunawan
              </div>
              <div className="relative w-fit [font-family:'Ubuntu-Medium',Helvetica] font-medium text-neutral-60 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                Buyer Retail
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
