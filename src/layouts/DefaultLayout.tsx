import { dt } from "@/utils/designTokens";
import { css } from "@emotion/react";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <div css={layoutStyle}>
      <header>
        <Link href="/">
          <span>Header</span>
        </Link>
      </header>
      <main>{props.children}</main>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
};

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
  }

  @media ${dt.breakpoints.mobile} {
    /* something */
  }
`;
