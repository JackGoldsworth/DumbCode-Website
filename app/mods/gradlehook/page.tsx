import type { Metadata } from 'next'
import { Code, CodeBlock, NoteTag } from '../../../components/Code'
import ModPage from '../../../components/ModPage'
import {
  additionalTasks,
  fields,
  legacyPluginApplication,
  messageFirstOption,
  pluginDSL,
  simplePlugin,
} from '../../../data/gradlehookexamples'
import { gradleHookInfo } from '../../../data/modData'
import { buildMetadata } from '../../../lib/seo'

export const metadata: Metadata = buildMetadata({
  title: gradleHookInfo.name,
  description: gradleHookInfo.description,
  path: '/mods/gradlehook',
  ogImage: { path: gradleHookInfo.image, width: 1280, height: 640 },
})

export default function GradleHookPage() {
  return (
    <ModPage modInfo={gradleHookInfo}>
      <ModSection title="About">
        <p>
          Adds the <Code>postRequest</Code> task which simply posts a POST
          request along with the specified builds. Additional fields for the
          request can be specified. The request uses the user agent{' '}
          <Code>Mozilla/5.0</Code> and has the content-type of{' '}
          <Code>multipart/form-data</Code>.
        </p>
      </ModSection>

      <ModSection title="Applying the Plugin">
        <p>
          Using the{' '}
          <ExternalLink href="https://docs.gradle.org/current/userguide/plugins.html#sec:plugins_block">
            plugin DSL
          </ExternalLink>
          :
        </p>
        <CodeBlock language="javascript" code={pluginDSL} />
        <p>
          Using the{' '}
          <ExternalLink href="https://docs.gradle.org/current/userguide/plugins.html#sec:old_plugin_application">
            legacy plugin application
          </ExternalLink>
          :
        </p>
        <CodeBlock language="javascript" code={legacyPluginApplication} />
      </ModSection>

      <ModSection title="Simple Plugin Example">
        <p>The bare minimum of a plugin using gradlehook.</p>
        <NoteTag note="The urlToken should be private." />
        <CodeBlock language="javascript" code={simplePlugin} />
      </ModSection>

      <ModSection title="Additional Tasks">
        <p>
          You can apply multiple tasks to be sent over. In this scenario 2 files
          would be sent.
        </p>
        <NoteTag note="The urlToken should be private." />
        <CodeBlock language="javascript" code={additionalTasks} />
      </ModSection>

      <ModSection title="Fields">
        <p>
          When sending the request, you might want to add additional data. This
          can be done with the addField method. For example, sending a webhook to
          a Discord server would be:
        </p>
        <NoteTag note="The urlToken should be private." />
        <CodeBlock language="javascript" code={fields} />
      </ModSection>

      <ModSection title="Field Placeholders">
        <p>
          The fields are able to have placeholders, as shown in the above
          example. These placeholders mean the following:
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <Code>{'{{version}}'}</Code> project version
          </li>
          <li>
            <Code>{'{{name}}'}</Code> project name
          </li>
          <li>
            <Code>{'{{group}}'}</Code> project group
          </li>
          <li>
            <Code>{'{{dateTime}}'}</Code> the current time in UTC, in ISO-8601
            format
          </li>
        </ul>
      </ModSection>

      <ModSection title="Message First Option">
        <p>
          In some scenarios, you want the text message to be sent as a separate
          webhook before the build webhooks. The following would mean a webhook
          with the field &quot;id&quot; would be sent, then once an HTTP_OK
          response code is sent, the artifacts are sent over in a webhook.
        </p>
        <NoteTag note="The urlToken should be private." />
        <CodeBlock language="javascript" code={messageFirstOption} />
      </ModSection>

      <ModSection title="License">
        <p>GradleHook is licensed under MIT with no exceptions.</p>
      </ModSection>
    </ModPage>
  )
}

function ModSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-ink-100">{title}</h2>
      <div className="mt-3 max-w-3xl leading-relaxed text-ink-400">
        {children}
      </div>
    </section>
  )
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="text-brand-400 underline underline-offset-2 hover:text-brand-300"
    >
      {children}
    </a>
  )
}
