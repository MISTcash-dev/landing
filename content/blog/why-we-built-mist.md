---
title: "Why we built MIST"
date: "2026-07-20"
excerpt: "The solvency near-miss, the Cairo discovery, and the chain of events that turned a close call into a protocol."
tags: ["founder story", "protocol"]
---

## The near-miss that started it

In August 2023, we had to prove ownership of on-chain assets to demonstrate solvency to the Singaporean government. We nearly dodged a bullet — almost publicly exposing that a specific wallet address was linked directly to our legal entity in Singapore. That moment made it viscerally clear: privacy in blockchain payments had to be solved.

## The Cairo turn

In November 2023, we implemented Homomorphic Encryption (HE) in Cairo as a first attempt. A month later, in December 2023, a conversation with Eli Ben-Sasson — co-founder of StarkWare and co-inventor of STARKs — sharpened our direction. We concluded that ZK proofs were the right tool to freely prove relationships between encrypted values.

## First proof on Starknet

Over the next six months, we rigorously studied whitepapers, dissected codebases, and developed a highly efficient proving algorithm from the ground up. That research culminated in July 2024, when we produced the first ZK proof on Starknet, implemented in Garaga in the following weeks. From there we turned our full focus to solving privacy — which became the foundation of MIST.

## What that means for the reader

The protocol did not begin as a compliance story or a consumer app. It began as a specific failure of trust — a wallet address almost tied to a legal entity — and a specific technical tool that removes the failure mode. Everything after that — the Chamber, the Reserve, the middleware rules, the compliance paths — is a consequence of that origin.
