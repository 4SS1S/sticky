import React from 'react';
import { MdClose } from 'react-icons/md';
import { fs } from 'fs';


import { Bar, Textarea, StickyNote, TitleButton } from './styles';


export default function Sticky() {

    return (
        <StickyNote>
            <Bar
                onMouseOver={
                    () => {
                        console.log('ok')
                    }
                }
            >
                Nota
                <TitleButton
                    id="close"
                >
                    <MdClose />
                </TitleButton>
            </Bar>
            <Textarea
                id='text'
                onInput={e => console.log(
                    document.querySelector('#text').innerHTML
                )}
                contentEditable={true}
            >
                <li>ok</li>
            </Textarea>
        </StickyNote>
    )
}
