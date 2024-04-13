import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {http, HttpResponse} from "msw";
import {SetupServer} from "msw/node";
import {startMSWServer} from "./msw";


describe("test", () => {
  let server: SetupServer;
  
  beforeAll(() => {
    server = startMSWServer();
  });
  
  afterEach(() => {
    server.resetHandlers();
  });
  
  afterAll(() => {
    server.close();
  });
  
  
  const mswBaseUrl = "https://api.chucknorris.io";
  
  test('renders learn react link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Update/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders the joke after update', async () => {
    
    const user = userEvent;
    server.use(respondJokes())
    render(<App/>);
    expect(screen.getByText("Press me")).toBeVisible();
    await act(() => user.click(screen.getByRole("button")));
    
    expect(screen.getByText("A designer and a coder enter a bar...")).toBeVisible();
    server.close()
  });
  
  
  const respondJokes = () => {
    return http.get(mswBaseUrl + "/jokes/random", () => {
      return HttpResponse.json({
        id: "askXdfS33",
        value: "A designer and a coder enter a bar...",
      }, {status: 200})
    })
  }
})
