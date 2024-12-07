import {
  type HTMLProps,
  type ReactNode,
  type KeyboardEvent as ReactKeyboardEvent,
  useRef,
  useState,
  useEffect,
  type TouchEvent as ReactTouchEvent,
  type MouseEvent as ReactMouseEvent,
  type FunctionComponent,
  useContext,
  useCallback,
  type CSSProperties,
  type RefObject,
  type Ref,
  forwardRef,
  createRef
} from 'react';
import { Tabs, Tab, TabTitleText, TabContent, TabContentBody } from '@patternfly/react-core';

export const TabContentWithBodyPadding: FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (event: ReactMouseEvent<any> | KeyboardEvent | MouseEvent, tabIndex: string | number) => {
    setActiveTabKey(tabIndex);
  };

  const contentRef1 = createRef<HTMLElement>();
  const contentRef2 = createRef<HTMLElement>();
  const contentRef3 = createRef<HTMLElement>();

  return (
    <>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Tabs in the body and padding example"
        role="region"
      >
        <Tab
          eventKey={0}
          title={<TabTitleText>Tab item 1</TabTitleText>}
          tabContentId="tab1SectionBodyPadding"
          tabContentRef={contentRef1}
        />
        <Tab
          eventKey={1}
          title={<TabTitleText>Tab item 2</TabTitleText>}
          tabContentId="tab2SectionBodyPadding"
          tabContentRef={contentRef2}
        />
        <Tab
          eventKey={2}
          title={<TabTitleText>Tab item 3</TabTitleText>}
          tabContentId="tab3SectionBodyPadding"
          tabContentRef={contentRef3}
        />
      </Tabs>
      <div>
        <TabContent eventKey={0} id="tab1SectionBodyPadding" ref={contentRef1}>
          <TabContentBody hasPadding> Tab 1 section with body and padding </TabContentBody>
        </TabContent>
        <TabContent eventKey={1} id="tab2SectionBodyPadding" ref={contentRef2} hidden>
          <TabContentBody hasPadding> Tab 2 section with body and padding </TabContentBody>
        </TabContent>
        <TabContent eventKey={2} id="tab3SectionBodyPadding" ref={contentRef3} hidden>
          <TabContentBody hasPadding> Tab 3 section with body and padding </TabContentBody>
        </TabContent>
      </div>
    </>
  );
};
