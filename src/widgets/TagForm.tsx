import { gql, useMutation, useQuery } from '@apollo/client'
import { HookedForm } from 'hooked-form'
import React from 'react'
import styled from 'styled-components'

import FormGroup from '@/components/FormGroup'

import QueryLoader from '@/widgets/QueryLoader'
import Tag from '@/widgets/Tag'

import TextInput from '@/form/TextInput'

import { handleGraphQLError } from '@/util/graphql'

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem 0 1.5rem;

  > * {
    margin-right: 0.5rem;
    margin-top: 1rem;
  }
`

const LIST_TAGGINGS = gql`
  query ListTaggings($id: ID!, $taggable: TaggableEnum!) {
    taggings(id: $id, taggable: $taggable) {
      id
      name
    }
  }
`

const ADD_TAG = gql`
  mutation AddTag($id: ID!, $taggable: TaggableEnum!, $name: String!) {
    addTag(id: $id, taggable: $taggable, name: $name) {
      tag {
        id
        name
      }
    }
  }
`

const REMOVE_TAG = gql`
  mutation RemoveTag($id: ID!, $taggable: TaggableEnum!, $tagId: ID!) {
    removeTag(id: $id, taggable: $taggable, tagId: $tagId) {
      tags {
        id
        name
      }
    }
  }
`

const TagForm = ({ id, taggable }) => {
  const query = useQuery(LIST_TAGGINGS, { variables: { id, taggable } })

  const [addTag, { loading: isLoading }] = useMutation(ADD_TAG, {
    update (cache, { data: { addTag: { tag } } }) {
      const taggings = query.data.taggings.concat(tag)

      cache.writeQuery({
        data: { taggings },
        query: LIST_TAGGINGS,
        variables: { id, taggable }
      })
    }
  })

  const [removeTag] = useMutation(REMOVE_TAG, {
    update (cache, { data: { removeTag: { tags } } }) {
      cache.writeQuery({
        data: { taggings: tags },
        query: LIST_TAGGINGS,
        variables: { id, taggable }
      })
    }
  })

  const handleRemove = (tagId) => (
    removeTag({ variables: { id, taggable, tagId } })
  )

  const handleSubmit = ({ name }, { setFormError }) => (
    addTag({ variables: { id, taggable, name } })
      .catch(handleGraphQLError({
        all: e => setFormError(e.message)
      }))
  )

  return (
    <HookedForm
      onSubmit={handleSubmit}
      onSuccess={(_result, { resetForm }) => resetForm()}
    >
      <QueryLoader
        result={query}
        whenLoading={
          <FormGroup>
            Loading tags...
          </FormGroup>
        }
      >
        {({ taggings }) => (
          taggings.length > 0 &&
            <TagList>
              {taggings.map(tag => (
                <Tag
                  id={tag.id}
                  name={tag.name}
                  onRemove={handleRemove}
                />
              ))}
            </TagList>
        )}
      </QueryLoader>
      <TextInput
        required
        fieldId='name'
        placeholder='Add a tag...'
      />
      <input
        disabled={isLoading}
        style={{ display: 'none' }}
        type='submit'
      />
    </HookedForm>
  )
}

export default TagForm
