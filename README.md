# less-wrong-estimate

## This uses PERT to predict estimates

[Program Evaluation and Review Technique](http://acqnotes.com/acqnote/tasks/pert-analysis)(PERT) is a method used to examine the tasked that are in a schedule and determine a variation of the Critical Path Method (CPM). It analyzes the time required to complete each task and its associated dependencies to determine the minimum time to complete a project. It estimates the shortest possible time each activity will take, the most likely length of time, and the longest time that might be taken if the activity takes longer than expected.

## Usage

Preferred:
```
npx less-wrong-estimate -o <optimistic(best case) time> -m <most likey time> -p <passimistic(worst case) time>
```
Using npm:
```
npm install less-wrong-estimate
npm less-wrong-estimate -p <optimistic time> -m <most likey time> -o <optimistic time>
```
Using yarn:
```
yarn add less-wrong-estimate
yarn less-wrong-estimate -p <optimistic time> -m <most likey time> -o <optimistic time>
```

PERT has two formulas. The tiny package only does only these two calculations:
```
Estimated Time = (P+4M+O)/6

Standarad Deviation = (P + O)/6

P - Passimistic time
M - Most likely time
O - Optimistic time
```
