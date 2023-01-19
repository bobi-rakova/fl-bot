CHARMS
====================

CHARMS is a sociotechnical harms reporting Discord bot leveraging a rule based logic programming approach to documenting the failure modes of algorithmic systems more broadly and large language models in particular.

## Goal for the projects:

- Formal specification of verifiable claims of algorithmic harms or controversies
- Evolving legal mechanisms leveraging the fields of medical law, computational law, and others

## Background

There have been a number of recent investigations and calls for algorithmic contestability i. e. a set of mechanisms for people to disagree, challenge, or dispute algorithmic outcomes.

Building on recent work by [Mozilla’s YouTube Regrets reporter](https://foundation.mozilla.org/en/youtube/findings/) project, Algorithmic Justice League’s [Community Reporting of Algorithmic System Harms](https://www.ajl.org/crash-project) project, and [the AI Incidents Database](https://incidentdatabase.ai/), we set out to empower everyday users of AI to collect evidence of algorithmic harms and collectively challenge algorithmic systems though a Discord bot called CHARMS.

CHARMS presents a symbolic logic-based approach to documentation of AI systems grounded in [a taxonomy of sociotechnical harms](https://arxiv.org/abs/2210.05791) proposed by Renee Shelby et al. who define sociotechnical harms broadly as "the adverse lived experiences resulting from a system’s deployment and operation in the world—occurring through the ‘co-productive’ interplay of technical system components and societal power dynamics." The taxonomy distinguishes between the following kinds of harms
- representational,
- allocative,
- quality-of-service,
- interpersonal, and
- social system/societal harms.

Users of large language models may not know what kind of harm they might be exposed to, therefore we aim to signpost or guide them in voicing their experience through documenting and narrowing down the potential harm.  

The symbolic logic-based approach to algorithmic harms reporting is inspired by recent developments at the intersection of algorithmic auditing and computational law. The outputs of the project aim to empower evolving new kinds of computational contracts between people and AI companies. A contract is an agreement by parties creating mutual obligations that are enforceable by law. A computable contract is one that is specified in sufficient detail to provide unambiguous answers to questions about compliance of clearly specified circumstances with the terms and conditions of the contract. From a pragmatic point of view, computable contracts are useful as the basis for computer systems capable of automated compliance management. In the context of AI and sociotechnical harms reporting, we aim to explore how automated compliance management could enable [new forms of collective action in contesting decisions made by algorithmic systems](https://foundation.mozilla.org/en/blog/terms-we-serve-with-introducing-a-new-mechanism-for-engaging-with-algorithmic-systems/).


## Requirements and development set up

See and install node packages included in `requirements.txt`.

Run the below command to register the discord commands described in the \commands directory of this repository. This needs to  

> node deploy-commands.js  

Start a local node server:

> node index.js