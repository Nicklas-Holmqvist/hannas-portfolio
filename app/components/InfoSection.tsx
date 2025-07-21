'use client';

import React from 'react';
import Button from './Button';

const onClick = (url: string) => {
  alert(url);
};

function InfoSection() {
  return (
    <article className="max-w-[900px] w-full">
      <h2 className="text-center">Information</h2>
      <p className="max-w-2xl text-center mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibus
        beatae. Culpa vero temporibus assumenda libero unde, accusamus pariatur
        odit rerum quia quas aliquid doloribus dicta tenetur reprehenderit
        officia voluptates! Atque, velit. Quidem, aut. Debitis, numquam. Esse
        natus dolorum est rerum qui officiis distinctio molestiae voluptates
        explicabo officia, veritatis adipisci consequatur labore. Adipisci
        consectetur est optio quos, quaerat laborum autem! Ipsam voluptatum, a
        exercitationem dolor dolorum quis possimus, laborum hic commodi
        accusantium accusamus maxime, temporibus ut odio facere in itaque ab!
        Reprehenderit quibusdam aliquam aut, exercitationem placeat enim nobis
        necessitatibus?
      </p>
      <div className="flex justify-center mt-10">
        <Button
          type="primary"
          label="Klicka"
          onClick={onClick}
          url={'https://www.smhi.se/'}
        />
        <Button
          type="secondary"
          label="Klicka"
          onClick={onClick}
          url={'https://www.smhi.se/'}
        />
      </div>
    </article>
  );
}

export default InfoSection;
