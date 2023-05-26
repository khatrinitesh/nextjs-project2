import React from 'react';
import Banner from '@/components/banner';
import ComboBox from '@/components/autocomplete';
import BasicButtons from '@/components/button';
import BasicButtonGroup from '@/components/btngroup';
import CheckboxLabels from '@/components/checkbox';
import FloatingActionButtons from '@/components/floatingactionbutton';
import RadioButtonsGroup from '@/components/radiogroup';
import BasicRating from '@/components/rating';

export default function About() {
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Eiusmod exercitation velit nulla velit. Nulla tempor veniam cupidatat fugiat culpa adipisicing in laboris ipsum magna id qui sunt. Tempor cupidatat minim fugiat reprehenderit eiusmod mollit aliquip velit pariatur minim magna. Cupidatat dolore laboris deserunt laboris occaecat ad dolore laboris eu sunt incididunt occaecat. Elit exercitation ad quis reprehenderit veniam ut elit enim sunt."/>
      <h2>AutoComplete</h2>
      <ComboBox/>
      <hr/>
      <h2>Button</h2>
      <BasicButtons/>
      <hr/>
      <h2>Button Group</h2>
      <BasicButtonGroup/>
      <hr/>
      <h2>Checkbox</h2>
      <CheckboxLabels/>
      <hr/>
      <h2>Floating Action Button</h2>
      <FloatingActionButtons/>
      <hr/>
      <h2>Radio Button Group</h2>
      <RadioButtonsGroup/>
      <hr/>
      <h2>Rating</h2>
      <BasicRating/>
      <hr/>
      <BasicRating/>
    </div>
  )
}
