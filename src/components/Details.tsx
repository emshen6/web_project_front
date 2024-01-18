import React from "react";


export const Details = () => {
  return (
    <div className="inline-flex font-manrope  h-96 w-full flex-col items-start justify-between gap-y-8 tracking-[0px] text-black">
      <div className="text-black text-4xl font-manrope self-stretch mt-36 mx-11 text-left">
        Почему выбирают нас
      </div>
      <div className="flex flex-grow items-center justify-between gap-y-7 gap-x-7 self-stretch [min-width:428px]">
        <div className="flex flex-grow flex-col items-center justify-between gap-y-7 self-stretch">
          <div className="flex flex-col items-start justify-center gap-y-28 self-stretch rounded-3xl bg-zinc-100 py-6 px-4">
            <div className="text-black text-3xl font-manrope self-stretch text-left">
              Гарантия
            </div>
            <div className="self-stretch text-justify text-xl font-normal leading-[27px]">
              Мы стремимся к высокому качеству и доверию к нашей продукции,
              поэтому обеспечиваем полную гарантию на каждый изготовленный нами
              продукт.
            </div>
          </div>
          <div className="flex flex-grow items-center justify-between gap-y-7 gap-x-7 self-stretch text-left font-normal">
            <div className="flex flex-grow flex-col items-start justify-between gap-y-10 self-stretch rounded-3xl bg-zinc-100 py-6 px-4">
              <div className="text-3xl leading-[normal]">Cистема скидок</div>
              <div className="self-stretch text-xl leading-[27px]">
                Мы предоставляем постоянным клиентам гибкую систему скидок, что
                делает наше сотрудничество выгодным для вас.
              </div>
            </div>
            <div className="flex flex-grow flex-col items-start justify-between gap-y-7 self-stretch rounded-3xl bg-zinc-100 py-6 px-4">
              <div className="w-96 text-3xl leading-[normal]">
                Доставка своим автотранспортом
              </div>
              <div className="self-stretch text-xl leading-[27px]">
                Используя собственный автотранспорт, мы обеспечиваем надежность
                и оперативность доставки.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow flex-col items-start justify-between gap-y-20 self-stretch rounded-3xl bg-zinc-100 py-6 px-4 text-left">
          <div className="text-black text-3xl font-manrope self-stretch text-left">
            Минимальные сроки изготовления
          </div>
          <div className="self-stretch text-xl font-normal leading-[27px]">
            Передовая технология производства позволяет нам сокращать сроки
            изготовления до минимума. Мы ценим ваше время и гарантируем
            оперативность поставок без ущерба для качества.
          </div>
        </div>
      </div>
    </div>
  );
};
