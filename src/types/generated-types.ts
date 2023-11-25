/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown
      }
    }
  }
  '/plants': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.plants.id']
          created_at?: parameters['rowFilter.plants.created_at']
          name?: parameters['rowFilter.plants.name']
          imgUrl?: parameters['rowFilter.plants.imgUrl']
          quantity?: parameters['rowFilter.plants.quantity']
          type?: parameters['rowFilter.plants.type']
          likes?: parameters['rowFilter.plants.likes']
          dislikes?: parameters['rowFilter.plants.dislikes']
          rotateBefore?: parameters['rowFilter.plants.rotateBefore']
          rotateAfter?: parameters['rowFilter.plants.rotateAfter']
          /** Filtering Columns */
          select?: parameters['select']
          /** Ordering */
          order?: parameters['order']
          /** Limiting and Pagination */
          offset?: parameters['offset']
          /** Limiting and Pagination */
          limit?: parameters['limit']
        }
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range']
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit']
          /** Preference */
          Prefer?: parameters['preferCount']
        }
      }
      responses: {
        /** OK */
        200: {
          schema: definitions['plants'][]
        }
        /** Partial Content */
        206: unknown
      }
    }
    post: {
      parameters: {
        body: {
          /** plants */
          plants?: definitions['plants']
        }
        query: {
          /** Filtering Columns */
          select?: parameters['select']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferPost']
        }
      }
      responses: {
        /** Created */
        201: unknown
      }
    }
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.plants.id']
          created_at?: parameters['rowFilter.plants.created_at']
          name?: parameters['rowFilter.plants.name']
          imgUrl?: parameters['rowFilter.plants.imgUrl']
          quantity?: parameters['rowFilter.plants.quantity']
          type?: parameters['rowFilter.plants.type']
          likes?: parameters['rowFilter.plants.likes']
          dislikes?: parameters['rowFilter.plants.dislikes']
          rotateBefore?: parameters['rowFilter.plants.rotateBefore']
          rotateAfter?: parameters['rowFilter.plants.rotateAfter']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.plants.id']
          created_at?: parameters['rowFilter.plants.created_at']
          name?: parameters['rowFilter.plants.name']
          imgUrl?: parameters['rowFilter.plants.imgUrl']
          quantity?: parameters['rowFilter.plants.quantity']
          type?: parameters['rowFilter.plants.type']
          likes?: parameters['rowFilter.plants.likes']
          dislikes?: parameters['rowFilter.plants.dislikes']
          rotateBefore?: parameters['rowFilter.plants.rotateBefore']
          rotateAfter?: parameters['rowFilter.plants.rotateAfter']
        }
        body: {
          /** plants */
          plants?: definitions['plants']
        }
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn']
        }
      }
      responses: {
        /** No Content */
        204: never
      }
    }
  }
}

export interface definitions {
  /** @description All plants that can be planted */
  plants: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string
    /** Format: text */
    name: string
    /** Format: text */
    imgUrl: string
    /** Format: numeric */
    quantity?: number
    /**
     * Format: text
     * @default vegetable
     */
    type?: string
    /** Format: text[] */
    likes?: string[]
    /** Format: text[] */
    dislikes?: string[]
    /** Format: text[] */
    rotateBefore?: string[]
    /** Format: text[] */
    rotateAfter?: string[]
  }
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object'
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none'
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none'
  /**
   * @description Preference
   * @enum {string}
   */
  preferPost:
  | 'return=representation'
  | 'return=minimal'
  | 'return=none'
  | 'resolution=ignore-duplicates'
  | 'resolution=merge-duplicates'
  /** @description Filtering Columns */
  select: string
  /** @description On Conflict */
  on_conflict: string
  /** @description Ordering */
  order: string
  /** @description Limiting and Pagination */
  range: string
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string
  /** @description Limiting and Pagination */
  offset: string
  /** @description Limiting and Pagination */
  limit: string
  /** @description plants */
  'body.plants': definitions['plants']
  /** Format: bigint */
  'rowFilter.plants.id': string
  /** Format: timestamp with time zone */
  'rowFilter.plants.created_at': string
  /** Format: text */
  'rowFilter.plants.name': string
  /** Format: text */
  'rowFilter.plants.imgUrl': string
  /** Format: numeric */
  'rowFilter.plants.quantity': string
  /** Format: text */
  'rowFilter.plants.type': string
  /** Format: text[] */
  'rowFilter.plants.likes': string
  /** Format: text[] */
  'rowFilter.plants.dislikes': string
  /** Format: text[] */
  'rowFilter.plants.rotateBefore': string
  /** Format: text[] */
  'rowFilter.plants.rotateAfter': string
}

export interface operations {}

export interface external {}