import { render} from '@testing-library/react';
import {MessageList} from "../MessageList";
describe('Message test',()=>{
    it('renders text',()=>{
       const message= render(<MessageList messageList={ [{text:'text'}]}/> )
       const msgText=message.getByText('text')
        expect(msgText).toBeInTheDocument()


    })
    it("renders author", () => {
        const author= render(<MessageList messageList={ [{author:'user'}]}/> )
        const authorText = author.getByText('user');
        expect(authorText).toBeInTheDocument();
    });
    it("matches snapshot with author", () => {
        const message= render(<MessageList messageList={ [{text:'text'}]}/> )

        expect(message).toMatchSnapshot();
    });
    it("matches snapshot with no author", () => {
        const author= render(<MessageList messageList={ [{author:'user'}]}/> )

        expect(author).toMatchSnapshot();
    });
});

