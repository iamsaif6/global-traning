import Image from 'next/image';
import React from 'react';

const Post = () => {
  return (
    <section className="max-w-[900px]  px-4 mx-auto py-[80px]">
      <p className="text-base lg:text-lg mb-[60px]">
        Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi. Curabitur bibendum,
        libero a sollicitudin posuere, metus lorem ultricies elit, vel pulvinar enim nisl non metus. Sed hendrerit, risus eget consectetur
        ullamcorper, nisl felis tempor eros, ut volutpat eros arcu a erat. Vivamus eget ipsum id felis feugiat cursus sit amet id nunc.
      </p>
      <div>
        <h3 className="text-[32px] mb-6">Maecenas vitae nunc</h3>
        <p className="text-base lg:text-lg">
          Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi. Curabitur bibendum,
          libero a <span className="text-primary">sollicitudin posuere</span>, metus lorem ultricies elit, vel pulvinar enim nisl non metus.
          Sed hendrerit, risus eget consectetur ullamcorper, nisl felis tempor eros, ut volutpat eros arcu a erat. Vivamus eget ipsum id
          felis feugiat cursus sit amet id nunc.
          <br />
          <br />
          Donec tristique eros nec neque vulputate, nec fermentum justo luctus. Nullam non dignissim nulla. Vestibulum nec tincidunt risus.
          Phasellus rhoncus nulla id nisl efficitur, at vehicula eros facilisis. Fusce ut lectus eu nisl elementum gravida. Vivamus a sapien
          dolor. Cras posuere purus nec eros cursus consequat. Integer a magna nec eros tincidunt sagittis. Integer laoreet eros sed purus
          luctus, ac elementum lorem dapibus. Pellentesque ut dictum est, vel rhoncus libero. Ut in libero vel mauris pharetra egestas at
          vel urna. Aliquam erat volutpat. Duis placerat enim in vehicula pharetra.
        </p>
        <div className="bg-primary text-center my-[60px] text-white rounded-3xl py-10 px-6">
          <p className="text-base lg:text-lg mb-6">
            “Nullam non dignissim nulla. Vestibulum nec tincidunt risus. Phasellus rhoncus nulla id nisl efficitur, at vehicula eros
            facilisis. Fusce ut lectus eu nisl elementum gravida.”
          </p>
          <p className="text-sm">Thomas Weber</p>
        </div>
        <p className="text-base lg:text-lg">
          Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi. Curabitur bibendum,
          libero a <span className="text-primary">sollicitudin posuere</span>, metus lorem ultricies elit, vel pulvinar enim nisl non metus.
          Sed hendrerit, risus eget consectetur ullamcorper, nisl felis tempor eros, ut volutpat eros arcu a erat. Vivamus eget ipsum id
          felis feugiat cursus sit amet id nunc.
          <br />
          <br />
          Donec tristique eros nec neque vulputate, nec fermentum justo luctus. Nullam non dignissim nulla. Vestibulum nec tincidunt risus.
          Phasellus rhoncus nulla id nisl efficitur, at vehicula eros facilisis. Fusce ut lectus eu nisl elementum gravida. Vivamus a sapien
          dolor. Cras posuere purus nec eros cursus consequat. Integer a magna nec eros tincidunt sagittis. Integer laoreet eros sed purus
          luctus, ac elementum lorem dapibus. Pellentesque ut dictum est, vel rhoncus libero. Ut in libero vel mauris pharetra egestas at
          vel urna. Aliquam erat volutpat. Duis placerat enim in vehicula pharetra.
        </p>
        <div className=" rounded-3xl my-[60px] overflow-hidden">
          <Image alt="Blog Cover" width={200} height={200} className="object-cover h-full w-full" src={'/image 49.png'} />
        </div>

        <p className="text-base lg:text-lg">
          Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi. Curabitur bibendum,
          libero a <span className="text-primary">sollicitudin posuere</span>, metus lorem ultricies elit, vel pulvinar enim nisl non metus.
          Sed hendrerit, risus eget consectetur ullamcorper, nisl felis tempor eros, ut volutpat eros arcu a erat. Vivamus eget ipsum id
          felis feugiat cursus sit amet id nunc.
          <br />
        </p>
        <div className="bg-primary text-center my-[60px] text-white rounded-3xl py-10 px-6">
          <p className="text-base lg:text-lg mb-6">
            “Nullam non dignissim nulla. Vestibulum nec tincidunt risus. Phasellus rhoncus nulla id nisl efficitur, at vehicula eros
            facilisis. Fusce ut lectus eu nisl elementum gravida.”
          </p>
          <p className="text-sm">Thomas Weber</p>
        </div>
        <p className="text-base lg:text-lg">
          Proin venenatis, nunc nec facilisis vehicula, mauris velit dictum ex, sit amet fermentum orci risus ac nisi. Curabitur bibendum,
          libero a <span className="text-primary">sollicitudin posuere</span>, metus lorem ultricies elit, vel pulvinar enim nisl non metus.
          Sed hendrerit, risus eget consectetur ullamcorper, nisl felis tempor eros, ut volutpat eros arcu a erat. Vivamus eget ipsum id
          felis feugiat cursus sit amet id nunc.
          <br />
        </p>
      </div>
    </section>
  );
};

export default Post;
