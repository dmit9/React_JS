
import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props shouls bein state", () => {
      const component = create(<ProfileStatus status="aaaaaaaaaa" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("aaaaaaaaaa");
    });
    test("after creation <span> should be displayed",async () => {
        const component = create(<ProfileStatus status="aaaaaaaaaa" />);
        const instance = component.root;
        const spann =await instance.findByType("span");
        expect(spann).not.toBeNull();
      });
    test("after creation <span> should be correct",async () => {
        const component = create(<ProfileStatus status="aaaaaaaaaa" />);
        const instance = component.root;
        const spann =await instance.findByType("span");
        expect(spann.children[0]).toBe("aaaaaaaaaa");
      });
  /*   test("after creation <input> should be displayed", () => {
        const component = create(<ProfileStatus status="aaaaaaaaaa" />);
        const instance = component.root;
        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();
      }); */
    test("input should be displayed in editMode",async () => {
        const component = create(<ProfileStatus status="aaaaaaaaaa" />);
        const instance = component.root;
        const span = await instance.findByType("span");
        span.props.onDoubleClick();
        const input = await instance.findByType("input");
        expect(input.props.value).toBe("aaaaaaaaaa");
      });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="aaaaa" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
      });
  });
