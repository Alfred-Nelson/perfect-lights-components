declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.svg" {
    const path: any;
    export default path;
}

// declare module "\*.svg" {
//     import React = require("react");
//     const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//     export default ReactComponent;
//   }