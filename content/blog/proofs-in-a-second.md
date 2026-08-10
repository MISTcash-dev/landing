---
title: "Proofs in a second, privacy in a pocket"
date: "2026-06-02"
excerpt: "How a proof that takes about a second on an iPhone changes what privacy infrastructure can be."
tags: ["tech", "performance"]
---

## The constraint that mattered

Privacy primitives are usually measured on servers. But payments happen in pockets. When the MIST team set the requirement that a proof must generate in about one second on an iPhone, it forced a different set of engineering choices than the typical protocol stack makes.

## What one second buys

At ~1 second of proving time, the privacy layer disappears from the user's experience. A sender does not wait through a confirmation spinner; the proof is ready by the time the payment link is confirmed. The cost target of under two cents per transaction keeps that experience viable at volume, against a current average of about five cents.

## What that means for integrators

Fast, cheap proving is what makes privacy composable. Operators can insert middleware rules without turning the payment flow into a batch job, and settlement stays close to real time. The spec publishes the numbers so integrators can verify them rather than take the team's word.
