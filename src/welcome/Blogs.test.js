import { render, screen } from "@testing-library/react";
import Blogs from "./Blogs";

describe("api testing", () => 
{
    test('Get Post from Api', async () => { 
        render(<Blogs/>);
        const list = await screen.findAllByRole(`lisitem`);
        expect(list).not.toHaveLength(0);
     });
});