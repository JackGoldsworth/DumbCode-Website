import { DetailedHTMLProps, HTMLAttributes } from "react";

export const ModelerDesc = (props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
    return (
        <p {...props}>
            The DumbCode Studio Modeler is the next generation cuboid based modeler on the market. Our team brings together many years of modeling
            experience and insight into what this tool was meant to become. We have used modelers like Blockbench, Tabula, Blender and even some
            professional cad softwares like Rhino and Revit. All this experience has been smashed together into one team dreaming up what the Modeler
            could be.
            <br /><br />
            The DumbCode Studio&lsquo;s Modeler is a command based modeler like Rhino, with the design of a modern modeler like Blender or Blockbench, and
            the features of a custom model format program like tabula.
            <br /><br />
            A massive problem with modeling softwares in the 21st century are that they are difficult to update. The design of an app can only grow
            to the extents that the developers expected it to, and new features and utilities often go un-noticed because they are placed deep in
            the menus as to not mess up the good things that already exist. That is why we adopted the command-based approach. To add a new feature
            our app just adds a new command, and a single button to the commanf bar! Cool huh?
            <br /><br />
            In addition to the app being very easy to develop new features for it is also open sourced, free, and browser based; so you can take the
            DumbCode studio everywhere you go!
        </p>
    );
}

export const TexturerDesc = (props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
    return (
        <p {...props}>
            The DumbCode Studio Texturer v2.0 is the next step towards creating a one-stop-shop for your team&lsquo;s Textuerers. While this tool doesn&lsquo;t
            quite replace every tool that a texturer may need to create a final texture, it&lsquo;s very close. The texturer brings tools like on-model
            painting that external texture tools can&lsquo;t cover, texture groups for creating multiple textures per model, texture layers for keeping
            all the details of your model seperate, and a new color palette tool for saving and storing the colors you want to use for you model!
            <br /><br />
            The DumbCode team is hoping that with the second version of the textuer we will be able to start polishing off and adding the features
            that every texturer needs to finalize their team&lsquo;s visuals without the need for external tools, and with the features we have planned
            for the texturer, we believe that goal isnt too far away!
        </p>
    );
}

export const AnimatorDesc = (props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
    return (
        <p {...props}>
            This is the 3rd version of the DumbCode Studio Animator and we think we&lsquo;ve finally nailed it. When we started the animator for our team
            there were no other tools on the market at all for creating animations for custom minecraft style models. After version 1, which was a
            proof of concept we believed that this could be the start of a new era for DumbCode. Shortly after the completion of v1 the Blockbench
            animation suite released, and we took notes from the feedback of the community to help us progress to the Animator v2.
            <br /><br />
            At the time of completion of the Animator v2 the team decided that we wanted to create a whole suite of tools that we now know as the
            Dumb Code Studio, so v2 really never saw the light of day, and we mainly used it internally at DumbCode for our minecraft mods. Along
            side the development of the other studio tabs we took notes on how to make this animator the best it has ever been.
            <br /><br />
            Our animator is jam packed with features like a now stackable keyframe based timeline that isn&lsquo;t per-cuboid. This means you can more
            easily animate complex models and manage your keyframes with layers. Our Animator also brings a new way to represent easing functions
            with what we refer to as &ldquo;progression points&rdquo;, the more optimal way to animate details on your model during runtime versus on-the-fly
            calculations. In v3.0 we are also bringing some of those command based design methodologies to the Animator to better automate the
            animation workflow. Our animator also has event points so that the animators can more easily coordinate with the game programmers to
            time game events with the animation events; like trigger a particle effect when a dragon has it&lsquo;s mouth open.
        </p>
    );
}

export const ProjectDesc = (props: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => {
    return (
        <p {...props}>
            The Project Page v2 on the DumbCode Studio is the last cherry on top. We bring revolutionary features to the asset creation ecosystem
            with the new Remote Repository features. Configure the Studio to interact directly with your team&lsquo;s GitHub repository to make sure that
            your team is up-to-date with the latest and greatest versions of your project&lsquo;s assets.
            <br /><br />
            That&lsquo;s just the newest feature, how about the older features of the Project Page that have made the DumbCode Studio truly the hub for
            your team&lsquo;s asset creation. From the Project page you can upload models of various formats including Tabula (.tbl), BlockBench (.bbmodel)
            and our very own DumbCode Model format (.dcm). You can also upload DumbCode Animation files (.dca). On this page you can also manage your
            Texture groups and the layers associated with each group.
            <br /><br />
            The DumbCode Studio Project page also makes it easy to manage your project workspace with new DumbCode Project files (.dcproj) that store
            all of the metadata associated with a whole project. Including history on every model, animation, texture; animation layers, and more that
            you may not want to forget between exports to the more optimized formats provided.
        </p>
    );
}